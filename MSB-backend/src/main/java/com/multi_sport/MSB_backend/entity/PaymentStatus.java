package com.multi_sport.MSB_backend.entity;

public enum PaymentStatus {
    UNPAID,         // Payment has not been made yet
    PAID,           // Payment has been completed
    CANCELLED,      // Payment has been cancelled
    PENDING,        // Payment is being processed
    DECLINED        // Payment has been declined
}
