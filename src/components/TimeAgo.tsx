import { formatDistanceToNow } from "date-fns";

function TimeAgo({ date }: { date: Date }) {
  return <span>{formatDistanceToNow(date, { addSuffix: true })}</span>;
}

export default TimeAgo;
