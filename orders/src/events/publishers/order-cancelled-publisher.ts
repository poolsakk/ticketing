import { Publisher, OrderCancelledEvent, Subjects } from "@microk8stickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}