import { Publisher, Subjects, TicketUpdatedEvent } from "@microk8stickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated; // type anontation
}

