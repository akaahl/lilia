type Props = {
  data?: {
    date: string;
    income: number;
    expenses: number;
  }[];
};

export default function Chart({ data }: Props) {
  return (
    <div>
      <div>Charts</div>
    </div>
  );
}
