import { iInstructor } from './instructor';

enum Difficulty {
    EASY,
    MEDIUM,
    HARD,
    INSANE
}

export interface iQuestion {
    id: string;
    question: string;
    explanation: string;
    teacher: iInstructor;
    assertions: any[];
    catergory: any;
    sampleInput: string;
    sampleOut: string;
    difficulty: Difficulty;
}