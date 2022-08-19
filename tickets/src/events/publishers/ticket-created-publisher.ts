import { Publisher, Subjects, TicketCreatedEvent } from "@microk8stickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated; // type anontation
    // readonly subject = Subjects.TicketCreated; // type anontation
}