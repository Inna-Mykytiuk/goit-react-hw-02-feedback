export function FeedbackOption({ options }) {
  return options.map(name => {
    return <button>{name}</button>;
  });
}
