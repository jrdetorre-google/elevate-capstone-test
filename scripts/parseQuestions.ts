import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ExamOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

interface ExamQuestion {
  id: string;
  module: 'M0' | 'M1' | 'M2' | 'M3';
  lesson: string;
  type: 'single' | 'multi';
  num_correct: number;
  question: string;
  options: ExamOption[];
  correct: ('A' | 'B' | 'C' | 'D')[];
  explanation: string;
}

function parseQuestionsFile(filePath: string): ExamQuestion[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Split on "#### Q"
  const rawBlocks = content.split(/(?=#### Q\d{3})/g).filter(b => b.trim().startsWith('#### Q'));
  
  const questions: ExamQuestion[] = [];

  for (const block of rawBlocks) {
    // Header line: #### Q001 — [M0L1 Introduction]
    const headerMatch = block.match(/#### (Q\d{3})\s*—\s*\[(.*?)\]/);
    if (!headerMatch) {
      console.warn('Could not parse header in block:', block.slice(0, 100));
      continue;
    }
    const id = headerMatch[1];
    const lesson = headerMatch[2].trim();

    // Module code: M0, M1, M2, M3
    let moduleCode: 'M0' | 'M1' | 'M2' | 'M3' = 'M0';
    if (lesson.startsWith('M0') || id <= 'Q045') moduleCode = 'M0';
    else if (lesson.startsWith('M1') || (id >= 'Q046' && id <= 'Q080')) moduleCode = 'M1';
    else if (lesson.startsWith('M2') || (id >= 'Q081' && id <= 'Q115')) moduleCode = 'M2';
    else if (lesson.startsWith('M3') || id >= 'Q116') moduleCode = 'M3';

    // Type
    const typeMatch = block.match(/- \*\*Type\*\*:\s*`(.*?)`/);
    const typeStr = typeMatch ? typeMatch[1] : '';
    const type: 'single' | 'multi' = typeStr.toLowerCase().includes('multi') ? 'multi' : 'single';

    // Num correct
    const numCorrectMatch = block.match(/- \*\*Number of correct answers\*\*:\s*`?(\d+)`?/);
    const num_correct = numCorrectMatch ? parseInt(numCorrectMatch[1], 10) : (type === 'multi' ? 2 : 1);

    // Question stem
    const qStemMatch = block.match(/- \*\*Question\*\*:\s*([\s\S]*?)(?=\n\s*-\s*\*\*A\)\*\*)/);
    const questionText = qStemMatch ? qStemMatch[1].trim() : '';

    // Options A, B, C, D
    const optAMatch = block.match(/-\s*\*\*A\)\*\*\s*([\s\S]*?)(?=\n\s*-\s*\*\*B\)\*\*)/);
    const optBMatch = block.match(/-\s*\*\*B\)\*\*\s*([\s\S]*?)(?=\n\s*-\s*\*\*C\)\*\*)/);
    const optCMatch = block.match(/-\s*\*\*C\)\*\*\s*([\s\S]*?)(?=\n\s*-\s*\*\*D\)\*\*)/);
    const optDMatch = block.match(/-\s*\*\*D\)\*\*\s*([\s\S]*?)(?=\n-\s*\*\*Correct Answer\*\*)/);

    const options: ExamOption[] = [
      { key: 'A', text: optAMatch ? optAMatch[1].trim() : '' },
      { key: 'B', text: optBMatch ? optBMatch[1].trim() : '' },
      { key: 'C', text: optCMatch ? optCMatch[1].trim() : '' },
      { key: 'D', text: optDMatch ? optDMatch[1].trim() : '' },
    ];

    // Correct Answer: - **Correct Answer**: **B** or - **Correct Answer**: **A, B, C**
    const correctMatch = block.match(/- \*\*Correct Answer\*\*:\s*\*\*?([A-D,\s]+)\*\*?/);
    const correctRaw = correctMatch ? correctMatch[1] : '';
    const correct = correctRaw
      .split(',')
      .map(s => s.trim())
      .filter(s => ['A', 'B', 'C', 'D'].includes(s)) as ('A' | 'B' | 'C' | 'D')[];

    // Explanation
    const explMatch = block.match(/- \*\*Explanation\*\*:\s*([\s\S]*?)(?=(#### Q|\n---|$))/);
    const explanation = explMatch ? explMatch[1].trim() : '';

    questions.push({
      id,
      module: moduleCode,
      lesson,
      type,
      num_correct,
      question: questionText,
      options,
      correct,
      explanation,
    });
  }

  return questions;
}

const inputPath = path.resolve(__dirname, '../questions.md');
const outputPathApp = path.resolve(__dirname, '../src/data/questions.json');
const outputPathPublic = path.resolve(__dirname, '../public/data/questions.json');

console.log(`Parsing questions from ${inputPath}...`);
const questions = parseQuestionsFile(inputPath);
console.log(`Successfully parsed ${questions.length} questions!`);

// Mathematical validation
const singleCount = questions.filter(q => q.type === 'single').length;
const multiCount = questions.filter(q => q.type === 'multi').length;
console.log(`Single-Choice: ${singleCount}, Multi-Response: ${multiCount}`);

const moduleCounts = { M0: 0, M1: 0, M2: 0, M3: 0 };
const letterCounts = { A: 0, B: 0, C: 0, D: 0 };
const singleLetterCounts = { A: 0, B: 0, C: 0, D: 0 };
const multiLetterCounts = { A: 0, B: 0, C: 0, D: 0 };

for (const q of questions) {
  moduleCounts[q.module]++;
  for (const c of q.correct) {
    letterCounts[c]++;
    if (q.type === 'single') singleLetterCounts[c]++;
    else multiLetterCounts[c]++;
  }
}

console.log('Module counts:', moduleCounts);
console.log('Single-choice letter distribution:', singleLetterCounts);
console.log('Multi-response letter distribution:', multiLetterCounts);
console.log('Global letter distribution:', letterCounts);

fs.writeFileSync(outputPathApp, JSON.stringify(questions, null, 2), 'utf-8');
fs.writeFileSync(outputPathPublic, JSON.stringify(questions, null, 2), 'utf-8');
console.log(`Saved parsed JSON to ${outputPathApp} and ${outputPathPublic}`);
