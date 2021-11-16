import { AgentInfo } from './agent-info.model';
import { Property } from './property.model';

export interface PropertyList {
  listID: number;
  agentInfo?: AgentInfo;
  records?: Property[];
  showContactInfo?: boolean;
  role?: string;
  title?: string;
  body?: string;
}
