import { Event } from "../models";

export interface EventsRepository {
    add(changeSet: Event): Promise<void>;
}
