enum ChatRequestStatus {
  Waiting = "Waiting",
  Ready = "Ready",
  Cancelled = "Cancelled",
}

enum ChatRequestType {
  Welcome = "vnd.kooth.welcome-chat-request",
}

export type MucRoomId = null | string;

// Aliasing to avoid function typehits that pass this parameter from reading 'EitherAsync<DomainError, string>'
type ServiceUserId = string;
type ChatRequestId = string;

interface ChatRequestBase {
  id: ChatRequestId;
  serviceUserId: ServiceUserId;
  updates: ChatRequestUpdate[];
}
enum ChatRequestUpdateType {
  Ready = "Ready",
  Cancelled = "Cancelled",
}

interface IncomingChatRequestUpdate {
  updateType: ChatRequestUpdateType;
}
interface ChatRequestUpdate extends IncomingChatRequestUpdate {}
