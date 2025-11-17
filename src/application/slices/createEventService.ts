import { Event } from "../../models";
import { EventsRepository } from "../ports";

async function store(
    event: Event,
    eventStoreRepo: EventsRepository
): Promise<void> {
    await eventStoreRepo.add(event);
}

const createEventService = {
    store: store
};

export default createEventService;
