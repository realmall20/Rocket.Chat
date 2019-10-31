import { RoomEvents } from '../../../../models/server';
import { contextDefinitions } from '../../../../models/server/models/Events';

const { ROOM: { context, contextQuery } } = contextDefinitions;

module.exports = async (event) => {
	const eventContext = contextQuery(context(event));

	return RoomEvents.addEvent(eventContext, event);
};