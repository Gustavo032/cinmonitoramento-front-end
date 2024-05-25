import { Box, Button, Checkbox, CheckboxGroup, Flex, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from '../../api.js';

export function Tabela() {
  const [data, setData] = useState([]);
  const [editingRowId, setEditingRowId] = useState(null);
  const [formData, setFormData] = useState<any>({});
	const { isOpen, onOpen, onClose } = useDisclosure();
  const [filters, setFilters] = useState({
    smp: '',
    veiculo: '',
    motorista: '',
    telefone: '',
    f: '',
    entrega: '',
    tecn: '',
    valor: '',
    isca: '',
    datainicio: '',
    datafinal: '',
    destino: '',
    status: '',
    obs: '',
  });
  const [noRecords, setNoRecords] = useState(false); // State para controlar se não há registros

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFilterChange = (e:any) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };
	
  const handleSubmit = async () => {
    try {
      const response = await api.post('cadastro', formData);
      console.log(response.data);
      onClose(); // Fecha o modal após o envio bem-sucedido
      fetchData();
		// Limpar o formulário ou qualquer outra ação necessária após o envio bem-sucedido
    } catch (error) {
      console.error(error);
    }
  };

  const onClickEdit = (request:any) => {
    setFormData(request);
    setEditingRowId(request.id_viagem);
  };

  const fetchData = async () => {
    try {
      const response = await api.get('select');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFilteredData = async () => {
    try {
      const response = await api.get('filtro', { params: filters });
      setData(response.data);
			if (response.status !== 404) {
        setNoRecords(false); // Define o estado como true se não houver registros
      } else {
        setData(response.data);
        setNoRecords(true); // Define o estado como false se houver registros
      }
    } catch (error) {
				setNoRecords(true); // Define o estado como false se houver registros
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const alterar = async (id:any) => {
    try {
      const response = await api.put('alterar', { ...formData, id: id });
      setEditingRowId(null);
      fetchData();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const delet = async (id:any) => {
    try {
      const config = { data: { id } };
      const response = await api.delete('delet', config);
      console.log(response.data);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const disabledCheckboxStyle = {
    'span.css-1ydjfm6[data-checked][data-disabled]': {
      padding: '0.4rem',
      color: 'white',
      bg: 'blue.500', // cor de fundo azul
      borderColor: 'blue.500', // cor da borda azul
    },
  };

  return (
    <Box minH="125vh" p="4" bgColor="gray.900" h="100%">
      <>
        <Flex mb="4" alignItems="center" justifyContent="space-between">
          <Button onClick={() => fetchData()} border="solid gray 0.16rem" mr="2" h="3rem" w="4rem" bgColor="gray.100">&#8592;</Button>
          <Flex justify="center" bgColor="gray.100" w="20%" border="solid gray 0.05rem" p="0.06rem 0" borderRadius="9999999px">
            <Image src="/logo192.png" h="3rem" />
          </Flex>
          <Flex w="50%" align="center">
            <Flex width="100%" h="100%" alignItems="center" ml="2" border="solid gray 0.16rem" bgColor="gray.200" p="0.2rem" borderRadius="0.25rem" justify="center">
              <Text as={FormLabel} mt="0.5rem" htmlFor="inputDateStart" mr="2">Data Inicial:</Text>
              <Box as={Input} type="date" id="inputDateStart" name="datainicio" bgColor="gray.100" width="100%" border="solid 0.12rem black" borderRadius="0.25rem" height="2.5rem" textAlign="center" onChange={handleFilterChange} />
            </Flex>
            <Flex width="100%" h="100%" alignItems="center" ml="2" border="solid gray 0.16rem" bgColor="gray.200" p="0.2rem" borderRadius="0.25rem" justify="center">
              <Text as={FormLabel} mt="0.5rem" htmlFor="inputDateEnd" ml="2" mr="2">Data Final:</Text>
              <Box as={Input} type="date" id="inputDateEnd" name="datafinal" bgColor="gray.100" width="100%" border="solid 0.12rem black" borderRadius="0.25rem" height="2.5rem" textAlign="center" onChange={handleFilterChange} />
            </Flex>
          </Flex>
        </Flex>

        <Flex mb="4" alignItems="center">
          <Input placeholder="SMP" name="smp" value={filters.smp} onChange={handleFilterChange} />
          <Input placeholder="Veículo" name="veiculo" value={filters.veiculo} onChange={handleFilterChange} />
          <Input placeholder="Motorista" name="motorista" value={filters.motorista} onChange={handleFilterChange} />
          <Input placeholder="Telefone" name="telefone" value={filters.telefone} onChange={handleFilterChange} />
				<Flex>
					<Button onClick={onOpen} colorScheme="blue">Adicionar Viagem</Button>
          <Button onClick={fetchFilteredData} colorScheme="blue" ml="2">Filtrar</Button>
				</Flex>
        </Flex>

        {noRecords ? ( // Renderiza a mensagem se não houver registros
          <Text mt="4" color="white">Não foi possível encontrar registros de acordo com os filtros.</Text>
        ) : (
          <Box p="4" bg="gray.300" borderRadius="md" borderColor="gray.900" border="solid gray 0.16rem" overflowX="auto">
          <Table variant="simple" borderColor="gray.900">
            <Thead borderColor="gray.900">
              <Tr borderColor="gray.900">
                <Th minW="100%">Id</Th>
                <Th minW="100%">Smp</Th>
                <Th minW="100%">Veiculo</Th>
                <Th minW="100%">Motorista</Th>
                <Th minW="100%">Telefone</Th>
                <Th minW="100%">F</Th>
                <Th minW="100%">Ag</Th>
                <Th minW="100%">Au</Th>
                <Th minW="100%">Entrega</Th>
                <Th minW="100%">Tecn</Th>
                <Th minW="100%">Valor</Th>
                <Th minW="100%">Isca</Th>
                <Th minW="100%">Data Inicio</Th>
                <Th minW="100%">Data Final</Th>
                <Th minW="100%">Destino</Th>
                <Th minW="100%">Status</Th>
                <Th minW="100%">Obs</Th>
                <Th minW="100%">Ações</Th>
              </Tr>
            </Thead>
            <Tbody borderColor="gray.900">
              {data.map((request:any) => (
                <Tr key={request.id_viagem} _hover={{ bg: "gray.100" }}>
                  <Td w="110%">{editingRowId === request.id_viagem ? <Input p="0" w="110%" name="id" value={formData.id} disabled={true} /> : request.id_viagem}</Td>
                  <Td w="110%">{editingRowId === request.id_viagem ? <Input p="0" w="110%" name="smp" value={formData.smp} onChange={handleInputChange} /> : request.smp}</Td>
                  <Td w="110%">{editingRowId === request.id_viagem ? <Input p="0" w="110%" name="veiculo" value={formData.veiculo} onChange={handleInputChange} /> : request.veiculo}</Td>
                  <Td w="110%">{editingRowId === request.id_viagem ? <Input p="0" inlineSize="auto" overflowWrap="break-word" overflow="visible" w="110%" name="motorista" value={formData.motorista} onChange={handleInputChange} /> : request.motorista}</Td>
                  <Td w="110%">{editingRowId === request.id_viagem ? <Input p="0" w="110%" name="telefone" value={formData.telefone} onChange={handleInputChange} /> : request.telefone}</Td>
                  <Td w="110%">{editingRowId === request.id_viagem ? <Checkbox name="f" isChecked={formData.f === "true"}  onChange={(e) => { console.log(formData.f); handleInputChange({ target: { name: "f",  value: String(e.target.checked) } })}} /> : <Checkbox disabled sx={disabledCheckboxStyle} isChecked={request.f  === "true"} />}</Td>
                  <Td w="110%">{editingRowId === request.id_viagem ? <Checkbox name="ag" isChecked={formData.ag === "true"} onChange={(e) =>  handleInputChange({ target: { name: "ag", value: String(e.target.checked) } })} /> : <Checkbox disabled sx={disabledCheckboxStyle} isChecked={request.ag === "true"} />}</Td>
                  <Td w="110%">{editingRowId === request.id_viagem ? <Checkbox name="au" isChecked={formData.au === "true"} onChange={(e) => handleInputChange({ target: { name: "au", value: String(e.target.checked) } })} /> : <Checkbox disabled sx={disabledCheckboxStyle} isChecked={request.au === "true"} />}</Td>
                  <Td w="110%">{editingRowId === request.id_viagem ? <Input p="0" w="110%" name="entrega" value={formData.entrega} onChange={handleInputChange} /> : request.entrega}</Td>
                  <Td w="110%">{editingRowId === request.id_viagem ? <Input p="0" w="110%" name="tecn" value={formData.tecn} onChange={handleInputChange} /> : request.tecn}</Td>
                  <Td w="110%">{editingRowId === request.id_viagem ? <Input p="0" w="110%" name="valor" value={formData.valor} onChange={handleInputChange} /> : request.valor}</Td>
                  <Td w="110%">{editingRowId === request.id_viagem ? <Input p="0" w="110%" name="isca" value={formData.isca} onChange={handleInputChange} /> : request.isca}</Td>
                  <Td w="110%">{editingRowId === request.id_viagem ? <Input p="0" w="110%" name="datainicio" value={formData.datainicio} onChange={handleInputChange} /> : request.datainicio}</Td>
                  <Td w="110%">{editingRowId === request.id_viagem ? <Input p="0" w="110%" name="datafinal" value={formData.datafinal} onChange={handleInputChange} /> : request.datafinal}</Td>
                  <Td w="110%">{editingRowId === request.id_viagem ? <Input p="0" inlineSize="auto" name="destino" value={formData.destino} onChange={handleInputChange} /> : request.destino}</Td>
                  <Td w="110%">{editingRowId === request.id_viagem ? <Input p="0" w="110%" name="status" value={formData.status} onChange={handleInputChange} /> : request.status}</Td>
                  <Td w="110%">{editingRowId === request.id_viagem ? <Input p="0" inlineSize="auto" name="obs" value={formData.obs} onChange={handleInputChange} /> : request.obs}</Td>
                  <Td w="100%" display={"flex"} flexDirection={"column"} >
                    {editingRowId === request.id_viagem ? (
                      <Button onClick={() => alterar(request.id_viagem)} colorScheme="green">Salvar</Button>
                    ) : (
                      <Button onClick={() => onClickEdit(request)} colorScheme="blue">Editar</Button>
                    )}
                    <Button onClick={() => delet(request.id_viagem)} colorScheme="red" mt="0.5rem">Deletar</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          </Box>
				)}
				<Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Adicionar Viagem</ModalHeader>
            <ModalCloseButton />
						<ModalBody>
              <Input placeholder="SMP" name="smp" value={formData.smp} onChange={handleInputChange} mb="3" />
              <Input placeholder="Veículo" name="veiculo" value={formData.veiculo} onChange={handleInputChange} mb="3" />
              <Input placeholder="Motorista" name="motorista" value={formData.motorista} onChange={handleInputChange} mb="3" />
              <Input placeholder="Telefone" name="telefone" value={formData.telefone} onChange={handleInputChange} mb="3" />
						  <Flex w="100%" align={"center"} justifyContent={"space-around"}>
                <Checkbox border="solid 0.06rem black" p="0.25rem" w="30%" justifyContent={"center"} name="f" isChecked={formData.f === "true"} onChange={(e) => handleInputChange({ target: { name: "f",  value: String(e.target.checked) } })} mb="3">F</Checkbox>
                <Checkbox border="solid 0.06rem black" p="0.25rem" w="30%" justifyContent={"center"} name="ag" isChecked={formData.ag === "true"} onChange={(e) => handleInputChange({ target: { name: "ag",  value: String(e.target.checked) } })} mb="3">AG</Checkbox>
                <Checkbox border="solid 0.06rem black" p="0.25rem" w="30%" justifyContent={"center"} name="au" isChecked={formData.au === "true"} onChange={(e) => handleInputChange({ target: { name: "au",  value: String(e.target.checked) } })} mb="3">AU</Checkbox>
							</Flex>
              <Input placeholder="Entrega" name="entrega" value={formData.entrega} onChange={handleInputChange} mb="3" />
              <Input placeholder="Tecn" name="tecn" value={formData.tecn} onChange={handleInputChange} mb="3" />
              <Input placeholder="Valor" name="valor" value={formData.valor} onChange={handleInputChange} mb="3" />
              <Input placeholder="Isca" name="isca" value={formData.isca} onChange={handleInputChange} mb="3" />
              <Input placeholder="Data Início" name="datainicio" value={formData.datainicio} onChange={handleInputChange} mb="3" />
              <Input placeholder="Data Final" name="datafinal" value={formData.datafinal} onChange={handleInputChange} mb="3" />
              <Input placeholder="Destino" name="destino" value={formData.destino} onChange={handleInputChange} mb="3" />
              <Input placeholder="Status" name="status" value={formData.status} onChange={handleInputChange} mb="3" />
              <Input placeholder="Obs" name="obs" value={formData.obs} onChange={handleInputChange} mb="3" />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={handleSubmit}>Salvar</Button>
              <Button variant="ghost" onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
}
