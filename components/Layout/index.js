import { useState } from "react";
import PropTypes from "prop-types";
import Notifications from "react-notification-system-redux";
import { connect } from "react-redux";

import Header from "../Header";
import Footer from "../Footer";

function Layout({ theme, children, notifications }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className={`layout ${showMenu ? "layout--show-menu" : ""}`}>
        <Header
          theme={theme}
          onMenuChange={setShowMenu}
        />
        <main role="main">
          {children}
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

Layout.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
  ]),
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

export default connect(mapStateToProps)(Layout);
