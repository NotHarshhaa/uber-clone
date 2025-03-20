variable "s3_bucket_name" {
  description = "S3 bucket name for Terraform state storage"
  type        = string
  default     = "Notharshhaa"  # Replace with your actual bucket name
}

variable "state_file_key" {
  description = "S3 key path for Terraform state file"
  type        = string
  default     = "EKS/terraform.tfstate"
}

variable "aws_region" {
  description = "AWS region where the S3 bucket is located"
  type        = string
  default     = "ap-south-1"
}

variable "dynamodb_table" {
  description = "DynamoDB table name for state locking"
  type        = string
  default     = "terraform-lock"  # Replace with your DynamoDB table name
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "dev"
}

variable "eks_cluster_name" {
  description = "Name of the EKS cluster"
  type        = string
  default     = "EKS_CLOUD"
}

variable "eks_node_group_name" {
  description = "Name of the EKS node group"
  type        = string
  default     = "Node-cloud"
}

variable "node_desired_size" {
  description = "Desired number of nodes in the node group"
  type        = number
  default     = 1
}

variable "node_max_size" {
  description = "Maximum number of nodes in the node group"
  type        = number
  default     = 2
}

variable "node_min_size" {
  description = "Minimum number of nodes in the node group"
  type        = number
  default     = 1
}

variable "instance_types" {
  description = "EC2 instance types for the node group"
  type        = list(string)
  default     = ["t2.medium"]
}

variable "aws_region" {
  description = "AWS region for deploying resources"
  type        = string
  default     = "ap-south-1"
}

variable "aws_profile" {
  description = "AWS CLI profile to use"
  type        = string
  default     = "default"
}

variable "environment" {
  description = "Deployment environment (e.g., dev, staging, prod)"
  type        = string
  default     = "dev"
}
