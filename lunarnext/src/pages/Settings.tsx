
interface SettingsProps {
    currUser: any;
  }

  export default function Settings({ currUser }: SettingsProps) {
    if (!currUser) {
      return <div className="text-dblue">Loading.. </div>;
    }
  
  
  return (
    <div className="p-4 mb-8 rounded-lg">
        <h2 className="text-3xl font-bold text-lightpurp">Account Settings</h2>
    </div>
  );
}