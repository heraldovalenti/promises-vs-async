import { Queue } from './interfaces';
import { UUIDService } from './UUIDService'
import { PriorityService } from './PriorityService';
export class QueueService {
    
    private defaultQueue: Queue;
    private queues: Queue[];
    private timeout: number = 10;
    constructor(
        queuesAmount: number,
        uuidService: UUIDService,
        priorityService: PriorityService) {
        this.defaultQueue = {
            id: '',
            priorityId: '',
            values: []
        }
        this.queues = [];
        for(let i = 0; i < queuesAmount; i++) {
            const q: Queue = {
                id: uuidService.generateUUID(),
                priorityId: priorityService.getRandomPriorityId(),
                values: []
            }
            this.queues.push(q);
        }
        console.log('queues', this.queues);
    }
    
    public async getQueue(id: string): Promise<Queue> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const q = this.queues.find(q => q.id === id);
                const result = (q) ? q : this.defaultQueue;
                resolve(result);
            }, this.timeout);
        });
    }

    public async getQueueIdList(): Promise<string[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.queues.map(q => q.id));
            }, this.timeout);
        });
    }

}