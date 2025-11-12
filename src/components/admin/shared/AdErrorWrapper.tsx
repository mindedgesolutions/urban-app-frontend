const AdErrorWrapper = ({ msg }: { msg?: string }) => {
  return <div className="text-destructive text-xs -mt-1">{msg}</div>;
};
export default AdErrorWrapper;
