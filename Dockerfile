# Dockerfile

# Stage 1: Build
FROM golang:1.20 AS builder

WORKDIR /app
COPY . .
RUN go build -o myapp

# Stage 2: Runtime
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/myapp .

# Command to run the executable
CMD ["./myapp"]