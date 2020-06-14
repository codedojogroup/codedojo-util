import { iTeacher } from './teacher';

enum Difficulty {
    EASY,
    MEDIUM,
    HARD,
    INSANE
}

export interface Question {
    id: string;
    question: string;
    explanation: string;
    teacher: iTeacher;
    assertions: any[];
    catergory: any;
    sampleInput: string;
    sampleOut: string;
    difficulty: Difficulty;
}