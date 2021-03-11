import React from 'react';
import { graphql, navigate } from 'gatsby';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Container from '../components/Container';
import GraphQLErrorList from '../components/Graphql-error-list';
import SEO from '../components/Seo';
import Layout from '../containers/Layout';
import '../styles/vars.css';

import {
  paragraph,
  responsiveTitle1,
} from '../components/typography.module.css';

const ContactContainer = styled.div`
  display: flex;
`;

const ContactContainerText = styled.div`
  flex: 1 1 45%;
`;

const ContactContainerForm = styled.div`
  flex: 1 1 55%;

  p {
    margin: 0 0 0.5rem 0;
  }

  form {
    max-width: 450px;
  }

  label {
    display: block;
    margin-bottom: 1em;
  }

  input,
  textarea {
    width: 100%;
    border-style: solid;
    border-width: 1px;
    border-color: var(--color-light-grey);
  }
  button,
  input,
  select,
  textarea {
    outline: none;
    /* border: none; */
    margin: 2px;
  }

  button,
  input,
  textarea {
    border-radius: 4px;
  }

  input {
    padding: 0.5em;
  }

  textarea {
    line-height: 1.4;
    padding: 1.2em;
  }

  button {
    background: var(--damasq-dark-indigo);
    padding: 0.5rem 2rem;
    border: none;
    color: var(--color-light-grey);
    font-size: 1rem;
    cursor: pointer;
  }
`;

const ContactPage = (props) => {
  // Initiate forms
  const { register, handleSubmit, errors, reset } = useForm();

  // Transforms the form data from the React Hook Form output to a format Netlify can read
  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');

  // Handles the post process to Netlify so we can access their serverless functions
  const handlePost = (formData, event) => {
    fetch(`/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact-form', ...formData }),
    })
      .then((response) => {
        navigate('/success/');
        reset();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  const { data } = props;
  const { page } = data;

  if (!page) {
    throw new Error(
      'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "Contact" page data and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={page.title} />
      <Container>
        <h1 className={responsiveTitle1}>{page.title}</h1>
        <ContactContainer>
          <ContactContainerText>
            <p>Follow on from Part 3: Sending it to Netlify</p>
            <a href="https://www.erichowey.dev/writing/form-submission-using-gatsby-sanity-netlify-react-hook-form/">
              Link to finish form.
            </a>
          </ContactContainerText>
          <ContactContainerForm>
            <form
              onSubmit={handleSubmit(handlePost)}
              name="contact-form"
              method="POST"
              action="/success/"
              data-netlify="true"
              netlify-honeypot="got-ya"
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <input
                type="hidden"
                name="formId"
                value="contact-form"
                ref={register()}
              />
              <label htmlFor="name">
                <p className={paragraph}>Name</p>
                {errors.name && <span>Error message</span>}
                <input name="name" ref={register({ required: true })} />
              </label>
              <label htmlFor="email">
                <p>Email</p>
                {errors.email && <span>Please format email correctly</span>}
                <input
                  name="email"
                  ref={register({
                    required: true,
                    pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                  })}
                />
              </label>
              <label htmlFor="message">
                <p>Message</p>
                <textarea rows="4" name="message" ref={register()} />
              </label>
              <label
                htmlFor="got-ya"
                style={{
                  position: 'absolute',
                  overflow: 'hidden',
                  clip: 'rect(0 0 0 0)',
                  height: '1px',
                  width: '1px',
                  margin: '-1px',
                  padding: '0',
                  border: '0',
                }}
              >
                Don’t fill this out if you're human:
                <input tabIndex="-1" name="got-ya" ref={register()} />
              </label>
              <div>
                <button type="submit">Send</button>
              </div>
            </form>
          </ContactContainerForm>
        </ContactContainer>
      </Container>
    </Layout>
  );
};
ContactPage.defaultProps = {
  data: {
    page: {
      title: 'No title',
    },
  },
};
export default ContactPage;

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
      title
      _rawBody
    }
  }
`;
