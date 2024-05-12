import { Box, Button, Flex, FormLabel, Image, Input, Link, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function Tabela(){
	const [ data, setData ] = useState<any>({
		itapevi:[{
			data: "05/03/2024",
			smp: 35183643,
			veiculo: "PDU6697/PCO6587",
			motorista: "JOSE EDUARDO SILVA",
			telefone: "11 96445-2839",
			f: true,
			ag: false,
			au: false,
			entrega: "FRACIONADA",
			tecn: "FIXO",
			valor: "607.708,80",
			isca: "109882966",
			data_inicio: "05/05/2024 06:00",
			data_final: "22/05/2024",
			destino: "MTZ x IPOJUCA",
			status: "50%",
			em_rota: true,
			observacoes: ""
		},{
			data: "05/03/2024",
			smp: 35183643,
			veiculo: "PDU6697/PCO6587",
			motorista: "JOSE EDUARDO SILVA",
			telefone: "11 96445-2839",
			f: true,
			ag: false,
			au: false,
			entrega: "FRACIONADA",
			tecn: "FIXO",
			valor: "607.708,80",
			isca: "109882966",
			data_inicio: "05/05/2024 06:00",
			data_final: "22/05/2024",
			destino: "MTZ x IPOJUCA",
			status: "50%",
			em_rota: true,
			observacoes: ""
		},{
			data: "05/03/2024",
			smp: 35183643,
			veiculo: "PDU6697/PCO6587",
			motorista: "JOSE EDUARDO SILVA",
			telefone: "11 96445-2839",
			f: true,
			ag: false,
			au: false,
			entrega: "FRACIONADA",
			tecn: "FIXO",
			valor: "607.708,80",
			isca: "109882966",
			data_inicio: "05/05/2024 06:00",
			data_final: "22/05/2024",
			destino: "MTZ x IPOJUCA",
			status: "50%",
			em_rota: true,
			observacoes: ""
		},{
			data: "05/03/2024",
			smp: 35183643,
			veiculo: "PDU6697/PCO6587",
			motorista: "JOSE EDUARDO SILVA",
			telefone: "11 96445-2839",
			f: true,
			ag: false,
			au: false,
			entrega: "FRACIONADA",
			tecn: "FIXO",
			valor: "607.708,80",
			isca: "109882966",
			data_inicio: "05/05/2024 06:00",
			data_final: "22/05/2024",
			destino: "MTZ x IPOJUCA",
			status: "50%",
			em_rota: true,
			observacoes: ""
		},{
			data: "05/03/2024",
			smp: 35183643,
			veiculo: "PDU6697/PCO6587",
			motorista: "JOSE EDUARDO SILVA",
			telefone: "11 96445-2839",
			f: true,
			ag: false,
			au: false,
			entrega: "FRACIONADA",
			tecn: "FIXO",
			valor: "607.708,80",
			isca: "109882966",
			data_inicio: "05/05/2024 06:00",
			data_final: "22/05/2024",
			destino: "MTZ x IPOJUCA",
			status: "50%",
			em_rota: true,
			observacoes: ""
		},{
			data: "05/03/2024",
			smp: 35183643,
			veiculo: "PDU6697/PCO6587",
			motorista: "JOSE EDUARDO SILVA",
			telefone: "11 96445-2839",
			f: true,
			ag: false,
			au: false,
			entrega: "FRACIONADA",
			tecn: "FIXO",
			valor: "607.708,80",
			isca: "109882966",
			data_inicio: "05/05/2024 06:00",
			data_final: "22/05/2024",
			destino: "MTZ x IPOJUCA",
			status: "50%",
			em_rota: true,
			observacoes: ""
		},{
			data: "05/03/2024",
			smp: 35183643,
			veiculo: "PDU6697/PCO6587",
			motorista: "JOSE EDUARDO SILVA",
			telefone: "11 96445-2839",
			f: true,
			ag: false,
			au: false,
			entrega: "FRACIONADA",
			tecn: "FIXO",
			valor: "607.708,80",
			isca: "109882966",
			data_inicio: "05/05/2024 06:00",
			data_final: "22/05/2024",
			destino: "MTZ x IPOJUCA",
			status: "50%",
			em_rota: true,
			observacoes: ""
		},{
			data: "05/03/2024",
			smp: 35183643,
			veiculo: "PDU6697/PCO6587",
			motorista: "JOSE EDUARDO SILVA",
			telefone: "11 96445-2839",
			f: true,
			ag: false,
			au: false,
			entrega: "FRACIONADA",
			tecn: "FIXO",
			valor: "607.708,80",
			isca: "109882966",
			data_inicio: "05/05/2024 06:00",
			data_final: "22/05/2024",
			destino: "MTZ x IPOJUCA",
			status: "50%",
			em_rota: true,
			observacoes: ""
		}]
	})
	
	useEffect(() => {
    (document.body.style as any).zoom = "80%"; // Definindo o zoom como 80%
}, []);

  return (
    <Box p="4" bgColor="gray.900" minH="100vh">
        <>
          <Flex mb="4" alignItems="center" justifyContent={"space-between"}>
            <Button as={Link} href="/" border="solid gray 0.16rem" mr="2" h="3rem" w="4rem" bgColor="gray.100">&#8592;</Button>

            <Flex justify="center" bgColor="gray.100" w="20%" border="solid gray 0.05rem" p="0.06rem 0" borderRadius="9999999px">
              <Image src="/logo192.png" h="3rem" />
            </Flex>
            <Flex w="50%" align="center" >
              <Flex width="100%" h="100%" alignItems="center" ml="2" border="solid gray 0.16rem" bgColor="gray.200" p="0.2rem" borderRadius={"0.25rem"} justify={"center"}>
                <Text as={FormLabel} mt="0.5rem" htmlFor="inputDateStart" mr="2">Data Inicial:</Text>
                <Box as={Input} type="date" id="inputDateStart" bgColor="gray.100" width="100%" border="solid 0.12rem black" borderRadius={"0.25rem"} height="2.5rem" textAlign="center" onChange={()=>console.log("test")} />
              </Flex>
              
              <Flex width="100%" h="100%" alignItems="center" ml="2" border="solid gray 0.16rem" bgColor="gray.200" p="0.2rem" borderRadius={"0.25rem"} justify={"center"}>
                <Text as={FormLabel} mt="0.5rem" htmlFor="inputDateEnd" ml="2" mr="2">Data Final:</Text>
                <Box as={Input} type="date" id="inputDateEnd" bgColor="gray.100" width="100%" border="solid 0.12rem black" borderRadius={"0.25rem"} height="2.5rem" textAlign="center" onChange={()=>console.log("test")} />
              </Flex>
            </Flex>
          </Flex>
          
          <Box p="4" bg="gray.300" borderRadius="md"  borderColor="gray.900" border="solid gray 0.16rem">
            <Table variant="simple"  borderColor="gray.900">
              <Thead  borderColor="gray.900">
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
                {data.itapevi.map((request:any, index:number) => (
                  <Tr _before={{
                    borderColor: '#000'
                  }}
                    key={index}>
                    <Td w="100%">{request.data}</Td>
                    <Td w="100%">{request.smp}</Td>
                    <Td w="100%">{request.veiculo}</Td>
                    <Td w="100%">{request.motorista}</Td>
                    <Td w="100%">{request.telefone}</Td>
                    <Td w="100%">{request.f === true ? 'x' : ''}</Td>
                    <Td w="100%">{request.au === true ? 'x' : ''}</Td>
                    <Td w="100%">{request.ag === true ? 'x' : ''}</Td>
                    <Td w="100%">{request.entrega}</Td>
                    <Td w="100%">{request.tecn}</Td>
                    <Td w="100%">{request.valor}</Td>
                    <Td w="100%">{request.isca}</Td>
                    <Td w="100%">{request.data_inicio}</Td>
                    <Td w="100%">{request.data_final}</Td>
                    <Td w="100%">{request.destino}</Td>
                    <Td w="100%">{request.status}</Td>
                    <Td w="100%" overflowX="auto">
											{request.observacoes === '' ? (<Button>Mais</Button>) : request.observacoes }
										</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </>
    </Box>
  );
};
