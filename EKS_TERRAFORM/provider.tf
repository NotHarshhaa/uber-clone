terraform {
  required_version = ">= 1.4.0"  # Ensures compatibility with Terraform versions

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"  # Allows minor updates within version 5
    }
  }
}

# Configure the AWS Provider with dynamic region selection
provider "aws" {
  region                  = var.aws_region
  shared_credentials_files = ["~/.aws/credentials"]  # Uses AWS credentials file
  profile                 = var.aws_profile         # Enables multiple AWS profiles

  default_tags {  # Automatically apply these tags to all AWS resources
    tags = {
      Owner       = "NotHarshhaa"
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
}
