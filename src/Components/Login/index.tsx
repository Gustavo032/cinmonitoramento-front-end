import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
	useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

export function Login() {

  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();



	async function loginUserFunction() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				navigate('/dashboard');
				
				resolve({ data: { token: 'your_token_here' } });
			}, 3000); // Simula um atraso de 3 segundos antes de retornar sucesso
		});
	}
	
	const handleLogin = async (event:any) => {
    event.preventDefault();
    try {
      // Exibir o toast de carregamento enquanto a promessa está pendente
      await toast.promise(loginUserFunction(), {
        loading: { title: 'Entrando...', description: 'Por favor, aguarde...' },
        success: { title: 'Usuário logado com sucesso!', description: 'Looks great' },
        error: { title: 'Erro ao logar usuário', description: 'Something wrong' },
      });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4} as="form" onSubmit={handleLogin}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
								type='submit'
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
