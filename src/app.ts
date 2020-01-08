import { QueueService } from './QueueService';
import { UUIDService } from './UUIDService';
import { PriorityService } from './PriorityService';

const uuidService: UUIDService = new UUIDService();
const priorityService: PriorityService = new PriorityService(5, uuidService);
const queueService: QueueService = new QueueService(2, uuidService, priorityService);

async function runWithMap() {
    const queueIds: string[] = await queueService.getQueueIdList();
    const queues = queueIds.map(async id => {
        const q = await queueService.getQueue(id);
        return q;
    });
    console.log('queues', queues);
    // uncomment to wait for the promises to complete
    const resolved = await Promise.all(queues);
    console.log('resolved', resolved);
};

function runWithPromises() {
    queueService.getQueueIdList()
    .then(queueIds => queueIds.map(x => queueService.getQueue(x)))
    .then(queueIdsPromises => Promise.all(queueIdsPromises))
    .then(resolvedQueues => console.log('resolvedQueues', resolvedQueues));
}

runWithMap();
// runWithPromises();