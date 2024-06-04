type Props = {
  title: string;
  subtitle: string;
};

const Heading = ({ title, subtitle }: Props) => (
  <div>
    <h3>{subtitle}</h3>
    <h2>{title}</h2>
  </div>
);

export default Heading;
