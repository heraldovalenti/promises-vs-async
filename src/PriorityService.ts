import { Priority } from './interfaces';
import { UUIDService } from './UUIDService'

export class PriorityService {
    
    private default: Priority;
    private priorities: Priority[];
    private timeout: number = 10;

    constructor(
        private prioritiesAmount: number,
        uuidService: UUIDService) {
        this.default = {
            id: '',
            value: -1
        }
        this.priorities = [];
        for (let i = 0; i < prioritiesAmount; i++) {
            const p: Priority = {
                id: uuidService.generateUUID(),
                value: i
            }
            this.priorities.push(p);
        }
        console.log('priorities', this.priorities);
    }

    public async getPriority(id: string): Promise<Priority> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const p = this.priorities.find(p => p.id === id);
                const result = (p) ? p : this.default;
                resolve(result);
            }, this.timeout);
        });
    }

    public getRandomPriorityId(): string {
        const priorityIndex: number = (Math.random() * this.prioritiesAmount) | 0;
        return this.priorities[priorityIndex].id;
    }

}