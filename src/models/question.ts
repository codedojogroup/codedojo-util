import { Instructor } from './instructor';

enum Difficulty {
    EASY,
    MODERATE,
    HARD,
    INSANE
}

enum Category {
    MATHS,
    ALGORITHM,
    STRUCTURE,
    PERFORMANCE
}

export interface Question {
    id: string;
    question: string;
    explanation: string;
    instructor: Instructor;
    assertions: string[];
    catergory: Category;
    sampleInput: string;
    sampleOutput: string;
    difficulty: Difficulty;
    completed: boolean;
}