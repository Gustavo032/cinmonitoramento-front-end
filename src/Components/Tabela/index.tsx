import { Box, Button, Flex, FormLabel, Image, Input, Link, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from '../../api.js';

export function Tabela() {
  const [data, setData] = useState([]);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [variavelClick, setVariavelClick] = useState(null);
  const [id, setId] = useState('');
  const [smp, setSmp] = useState('');
  const [veiculo, setVeiculo] = useState('');
  const [motorista, setMotorista] = useState('');
  const [telefone, setTelefone] = useState('');
  const [f, setF] = useState('');
  const [ag, setAg] = useState('');
  const [au, setAu] = useState('');
  const [entrega, setEntrega] = useState('');
  const [tecn, setTecn] = useState('');
  const [valor, setValor] = useState('');
  const [isca, setIsca] = useState('');
  const [datainicio, setDatainicio] = useState('');
  const [datafinal, setDatafinal] = useState('');
  const [destino, setDestino] = useState('');
  const [status, setStatus] = useState('');
  const [obs, setObs] = useState('');
  const [contador, setContador] = useState(0);

  const onClick = (request: any) => {
    setSelectedRowId(request.id_viagem);
    setId(request.id_viagem);
    setSmp(request.smp);
    setVeiculo(request.veiculo);
    setMotorista(request.motorista);
    setTelefone(request.telefone);
    setF(request.f);
    setAg(request.ag);
    setAu(request.au);
    setEntrega(request.entrega);
    setTecn(request.tecn);
    setValor(request.valor);
    setIsca(request.isca);
    setDatainicio(request.datainicio);
    setDatafinal(request.datafinal);
    setDestino(request.destino);
    setStatus(request.status);
    setObs(request.obs);
    setVariavelClick(request.id_viagem);
    console.log('O id está aqui: ', request.id_viagem);
  };

  useEffect(() => {
    (document.body.style as any).zoom = "80%";
    const fetchData = async () => {
      try {
        const response = await api.get('select');
        console.log(response);
        setData(response.data);
        setContador(0);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [contador]);

  async function alterar(event: any) {
    try {
      const config2 = {
        id,
        smp,
        veiculo,
        motorista,
        telefone,
        f,
        ag,
        au,
        entrega,
        tecn,
        valor,
        isca,
        datainicio,
        datafinal,
        destino,
        status,
        obs
      };
      const response = await api.put('alterar', config2);
      setContador(contador + 1);
    } catch (error) {
      console.log(error);
    }
  }

  async function delet() {
    try {
      const config = { data: { id: selectedRowId } };
      const response = await api.delete('delet', config);
      console.log(response.data);
      setContador(contador + 1);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box p="4" bgColor="gray.900" minH="100vh">
      <>
        <Flex mb="4" alignItems="center" justifyContent={"space-between"}>
          <Button onClick={alterar} border="solid gray 0.16rem" mr="2" h="3rem" w="4rem" bgColor="gray.100">&#8592;</Button>

          <Flex justify="center" bgColor="gray.100" w="20%" border="solid gray 0.05rem" p="0.06rem 0" borderRadius="9999999px">
            <Image src="/logo192.png" h="3rem" />
          </Flex>
          <Flex w="50%" align="center">
            <Flex width="100%" h="100%" alignItems="center" ml="2" border="solid gray 0.16rem" bgColor="gray.200" p="0.2rem" borderRadius={"0.25rem"} justify={"center"}>
              <Text as={FormLabel} mt="0.5rem" htmlFor="inputDateStart" mr="2">Data Inicial:</Text>
              <Box as={Input} type="date" id="inputDateStart" bgColor="gray.100" width="100%" border="solid 0.12rem black" borderRadius={"0.25rem"} height="2.5rem" textAlign="center" onChange={() => console.log("test")} />
            </Flex>

            <Flex width="100%" h="100%" alignItems="center" ml="2" border="solid gray 0.16rem" bgColor="gray.200" p="0.2rem" borderRadius={"0.25rem"} justify={"center"}>
              <Text as={FormLabel} mt="0.5rem" htmlFor="inputDateEnd" ml="2" mr="2">Data Final:</Text>
              <Box as={Input} type="date" id="inputDateEnd" bgColor="gray.100" width="100%" border="solid 0.12rem black" borderRadius={"0.25rem"} height="2.5rem" textAlign="center" onChange={() => console.log("test")} />
            </Flex>
          </Flex>
        </Flex>

        <Box p="4" bg="gray.300" borderRadius="md" borderColor="gray.900" border="solid gray 0.16rem">
          <Table variant="simple" borderColor="gray.900">
            <Thead borderColor="gray.900">
              <Tr borderColor="gray.900">
                <Th maxW="1rem">Data</Th>
                <Th maxW="1rem">Smp</Th>
                <Th maxW="1rem">Veiculo</Th>
                <Th maxW="1rem">Motorista</Th>
                <Th maxW="1rem">Telefone</Th>
                <Th maxW="1rem">F</Th>
                <Th maxW="1rem">Ag</Th>
                <Th maxW="1rem">Au</Th>
                <Th maxW="1rem">Entrega</Th>
                <Th maxW="1rem">Tecn</Th>
                <Th maxW="1rem">Valor</Th>
                <Th maxW="1rem">Isca</Th>
                <Th maxW="1rem">Data Inicio</Th>
                <Th maxW="1rem">Data Final</Th>
                <Th maxW="1rem">Destino</Th>
                <Th maxW="1rem">Status</Th>
                <Th maxW="1rem">Obs</Th>
              </Tr>
            </Thead>
            <Tbody borderColor="gray.900">
              {data.map((request: any, index: number) => (
                <Tr onClick={() => onClick(request)} key={request.id_viagem} _before={{ borderColor: variavelClick === request.id_viagem ? "black" : "green" }}>
                  <Td w="100%">{/* Empty cell for alignment */}</Td>
                  <Td w="100%"><input value={selectedRowId === request.id_viagem ? smp : request.smp} onChange={(e) => setSmp(e.target.value)} /></Td>
                  <Td w="100%"><input value={selectedRowId === request.id_viagem ? veiculo : request.veiculo} onChange={(e) => setVeiculo(e.target.value)} /></Td>
                  <Td w="100%"><input value={selectedRowId === request.id_viagem ? motorista : request.motorista} onChange={(e) => setMotorista(e.target.value)} /></Td>
                  <Td w="100%"><input value={selectedRowId === request.id_viagem ? telefone : request.telefone} onChange={(e) => setTelefone(e.target.value)} /></Td>
                  <Td w="100%"><input value={selectedRowId === request.id_viagem ? f : request.f} onChange={(e) => setF(e.target.value)} /></Td>
                  <Td w="100%"><input value={selectedRowId === request.id_viagem ? ag : request.ag} onChange={(e) => setAg(e.target.value)} /></Td>
                  <Td w="100%"><input value={selectedRowId === request.id_viagem ? au : request.au} onChange={(e) => setAu(e.target.value)} /></Td>
                  <Td w="100%"><input value={selectedRowId === request.id_viagem ? entrega : request.entrega} onChange={(e) => setEntrega(e.target.value)} /></Td>
                  <Td w="100%"><input value={selectedRowId === request.id_viagem ? tecn : request.tecn} onChange={(e) => setTecn(e.target.value)} /></Td>
                  <Td w="100%"><input value={selectedRowId === request.id_viagem ? valor : request.valor} onChange={(e) => setValor(e.target.value)} /></Td>
                  <Td w="100%"><input value={selectedRowId === request.id_viagem ? isca : request.isca} onChange={(e) => setIsca(e.target.value)} /></Td>
                  <Td w="100%"><input value={selectedRowId === request.id_viagem ? datainicio : request.datainicio} onChange={(e) => setDatainicio(e.target.value)} /></Td>
                  <Td w="100%"><input value={selectedRowId === request.id_viagem ? datafinal : request.datafinal} onChange={(e) => setDatafinal(e.target.value)} /></Td>
                  <Td w="100%"><input value={selectedRowId === request.id_viagem ? destino : request.destino} onChange={(e) => setDestino(e.target.value)} /></Td>
                  <Td w="100%"><input value={selectedRowId === request.id_viagem ? status : request.status} onChange={(e) => setStatus(e.target.value)} /></Td>
                  <Td w="100%" overflowX="auto"><input value={selectedRowId === request.id_viagem ? obs : request.obs} onChange={(e) => setObs(e.target.value)} /></Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </>
    </Box>
  );
};