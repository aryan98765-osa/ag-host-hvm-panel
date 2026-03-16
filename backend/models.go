package models

// VM represents a virtual machine model.
type VM struct {
	ID       string `json:"id"`    // Unique identifier for the VM
	Name     string `json:"name"`  // Name of the VM
	NodeID   string `json:"node_id"` // ID of the node hosting the VM
	UserID   string `json:"user_id"` // ID of the user owning the VM
}

// Node represents a node model.
type Node struct {
	ID   string `json:"id"` // Unique identifier for the node
	Name string `json:"name"` // Name of the node
	IP   string `json:"ip"`   // Public IP address of the node
}

// User represents a user model.
type User struct {
	ID       string `json:"id"`     // Unique identifier for the user
	Username  string `json:"username"` // Username of the user
	Email     string `json:"email"`    // Email address of the user
	CreatedAt string `json:"created_at"` // Account creation timestamp
}