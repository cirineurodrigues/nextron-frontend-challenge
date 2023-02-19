import Head from 'next/head';

import Register from '@register/pages/Register';

export default function RegisterPage() {
  /* const router = useRouter();
  const [state, setState] = useState<any>({
    email: '',
    password: '',
    name: '',
    isSubmitting: false,
    message: '',
    errors: null,
  });

  const { email, password, name, message, isSubmitting, errors } = state;

  const handleChange = async (e: any) => {
    await setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setState({ ...state, isSubmitting: true });

    const { email, password, name } = state;
    try {
      const res = await fetch(`${apiNextURl}/register`, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          name,
        }),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => res.json());
      const { success, msg, errors } = res;

      if (!success) {
        return setState({
          ...state,
          message: msg,
          errors,
          isSubmitting: false,
        });
      }

      router.push('/login');
    } catch (e: any) {
      setState({ ...state, message: e.toString(), isSubmitting: false });
    }
  }; */

  return (
    <>
      <Head>
        <title>Register - Nextron Energia</title>
      </Head>
      <Register />
    </>
  );
}
