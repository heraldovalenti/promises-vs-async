export interface Queue {
    id: string;
    priorityId: string;
    values: string[];
}

export interface Priority {
    id: string;
    value: number;
}