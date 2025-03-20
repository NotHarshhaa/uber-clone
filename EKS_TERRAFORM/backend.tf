terraform {
  backend "s3" {
    bucket         = var.s3_bucket_name   # S3 bucket for storing Terraform state
    key            = var.state_file_key   # Path to the state file in S3
    region         = var.aws_region       # AWS region
    encrypt        = true                 # Enables state file encryption
    dynamodb_table = var.dynamodb_table   # Enables state locking to prevent conflicts
  }
}
