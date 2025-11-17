import { app, InvocationContext } from '@azure/functions';
import CreateEventService from '../application/slices/createEventService';
import CosmosEventsRepository from '../infrastructure/adapters/cosmosEventsRepository';
import { Event } from '../models';

app.serviceBusTopic('serviceTopicTrigger', {
    connection: 'ServiceBusConnection',
    topicName: 'PolyMapper.CreateEvent',
    subscriptionName: 'pollymapper-events',
    handler: (message: Event, context: InvocationContext) => {
        context.log('Processing message:', message);
        CreateEventService.store(message, CosmosEventsRepository);
        context.log('Completed message:', message);
    }
});
