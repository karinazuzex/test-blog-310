import ErrorPage from 'next/error'
import PropTypes from "prop-types";
import Notifications from "react-notification-system-redux";
import { connect } from "react-redux";
import { gql } from 'apollo-boost';
import client from './../libs/apollo';
import Head from './../components/Head';
import {
  Header,
  Footer,
  SectionTitle,
  SectionTrust,
  SectionReview,
  SectionComparison,
  SectionInstall,
  SectionCallback,
} from "./../components/pageSections/landing-pages";

/**
 * @param {{
 *  notifications: import('react-notification-system').Notification[];
 *  error: boolean;
 *  errorCode: number;
 *  metaTags: {title: string; description: string; image: {url?: string}};
 *  title: string;
 *  textUnderTitle: string;
 *  buttonText: string;
 *  tableTitle: string;
 *  tableDescription: string;
 *  tableButtonText: string;
 *  tableButtonLink?: string;
 *  titleUnderTable: string;
 *  textUnderTable: string;
 *  imageUnderTable: {url?: string};
 *  formTitle: string;
 *  formDescription: string;
 *  formButtonText: string;
 *  slug: string;
 * }} props
 */
function LandingPageBySlug({
  notifications,
  error,
  errorCode,
  metaTags,
  title,
  textUnderTitle,
  buttonText,
  tableTitle,
  tableDescription,
  tableButtonText,
  tableButtonLink,
  titleUnderTable,
  textUnderTable,
  imageUnderTable,
  slug,
  formTitle,
  formDescription,
  formButtonText,
}) {
  if (error) {
    return <ErrorPage statusCode={errorCode} />;
  }

  return (
    <>
      <div className="layout landingPage">
        <Head
          title={metaTags?.title}
          description={metaTags?.description}
          img={metaTags?.image?.url}
        />
        <Header />
        <main role="main">
          <SectionTitle
            title={title}
            description={textUnderTitle}
            btnText={buttonText}
          />
          <SectionTrust />
          <SectionReview />
          <SectionComparison
            title={tableTitle}
            description={tableDescription}
            btnText={tableButtonText}
            btnLink={tableButtonLink}
          />
          <SectionInstall
            title={titleUnderTable}
            description={textUnderTable}
            image={imageUnderTable?.url}
          />
          <SectionCallback
            pageUrl={slug}
            title={formTitle}
            description={formDescription}
            btnText={formButtonText}
          />
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

const GET_LANDING_BY_SLUG = gql`
  query LandingPage($slug: String!) {
    landingPage(filter: { slug: { eq: $slug } }) {
      title
      textUnderTitle(markdown: false)
      buttonText
      metaTags {
        title
        description
        image {
          url
        }
      }
      tableTitle
      tableDescription(markdown: false)
      tableButtonText
      tableButtonLink
      titleUnderTable(markdown: false)
      textUnderTable(markdown: false)
      imageUnderTable {
        url
      }
      formTitle
      formDescription(markdown: false)
      formButtonText
      slug
    }
  }
`;

/**
 * @type {import('next').GetServerSideProps}
 */
export async function getServerSideProps({ params: { landing_page_slug = '' } = {}, res }) {
  const { data } = await client.query({
    query: GET_LANDING_BY_SLUG,
    variables: {
      slug: landing_page_slug,
    }
  });

  if (!data?.landingPage) {
    res.statusCode = 404;
    return {
      props: {
        error: true,
        errorCode: 404,
      }
    };
  }

  return {
    props: {
      ...(data?.landingPage || {}),
    }
  };
}

LandingPageBySlug.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape({
    autoDismiss: PropTypes.number,
    level: PropTypes.string.isRequired,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    position: PropTypes.string.isRequired,
    uid: PropTypes.any.isRequired,
  })),
  landing_data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    textUnderTitle: PropTypes.string,
    buttonText: PropTypes.string,
    metaTags: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.shape({
        url: PropTypes.string,
      }),
    }).isRequired,
    keywordsMeta: PropTypes.string,
    tableTitle: PropTypes.string,
    tableDescription: PropTypes.string,
    tableButtonText: PropTypes.string,
    tableButtonLink: PropTypes.string,
    titleUnderTable: PropTypes.string,
    textUnderTable: PropTypes.string,
    imageUnderTable: PropTypes.shape({
      url: PropTypes.string,
    }),
    formTitle: PropTypes.string.isRequired,
    formDescription: PropTypes.string.isRequired,
    formButtonText: PropTypes.string.isRequired,
    pageUrl: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = state => ({
  notifications: state.notifications,
});

export default connect(mapStateToProps)(LandingPageBySlug);

