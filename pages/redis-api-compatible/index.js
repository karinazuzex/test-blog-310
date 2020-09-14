import PropTypes from "prop-types";
import Notifications from "react-notification-system-redux";
import {
  Header,
  Footer,
  SectionTitle,
  SectionTrust,
  SectionReview,
  SectionComparison,
  SectionInstall,
  SectionCallback,
} from "../../components/pageSections/redis-api-compatible";
import { connect } from "react-redux";


function RedisApiCompatiblePage({ notifications }) {
  return (
    <>
      <div className="layout compatiblePage">
        <Header />
        <main role="main">
          <SectionTitle />
          <SectionTrust />
          <SectionReview />
          <SectionComparison />
          <SectionInstall />
          <SectionCallback />
        </main>
        <Footer />
      </div>
      <Notifications
        style={false}
        notifications={notifications}
      />
    </>
  );
}

RedisApiCompatiblePage.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape({
    autoDismiss: PropTypes.number,
    level: PropTypes.string.isRequired,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    position: PropTypes.string.isRequired,
    uid: PropTypes.any.isRequired,
  })),
};

const mapStateToProps = state => ({
  notifications: state.notifications,
});

export default connect(mapStateToProps)(RedisApiCompatiblePage);