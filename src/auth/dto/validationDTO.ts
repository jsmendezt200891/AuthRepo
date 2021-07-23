import { CreateEventDto } from './index';
import { PartialType } from "@nestjs/mapped-types";

export class ValidationDto extends PartialType(CreateEventDto){}