import { Message as MessageUI } from 'components';
import { useAppSelector } from 'store';
import { selectMessageById } from 'store/features/messageSlice';

const Message = ({ id, authId }: { id: string; authId: string }) => {
  const message = useAppSelector((state) => selectMessageById(state, id));
  return <MessageUI isMe={authId === message?.user}>{message?.text}</MessageUI>;
};

export default Message;
