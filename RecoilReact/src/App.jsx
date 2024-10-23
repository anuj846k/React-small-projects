import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./store/atoms/count";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </div>
  );
};

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomcount = useRecoilValue(jobsAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  return (
    <div>
      <button>
        Home(
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs({jobsAtomcount})</button>
      <button>Messaging({messagingCount})</button>
      <button>Notifications({notificationsCount})</button>
      <button>Me({totalNotificationCount})</button>
    </div>
  );
}

export default App;
