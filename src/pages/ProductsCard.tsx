import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useColorMode } from "../components/ui/color-mode";
import { IProduct } from "../interfaces";
import { Link } from "react-router-dom";

interface IProps {
  product: IProduct;
}

export const ProductsCard = ({ product }: IProps) => {
  const { description, title, thumbnail, price, id, category } = product;
  console.log(id);
  
  const { colorMode } = useColorMode();

  return (
    <Box
      p={5}
      rounded={"lg"}
      maxW="sm"
      mx={"auto"}
      mb={20}
      border={"1px solid #a8b5c8"}
      bg={"none"}
      overflow="hidden"
      display="flex"
      flexDirection="column"
    >
      <Image
        rounded="full"
        boxSize="200px"
        margin={5}
        mx="auto"
        objectFit="cover"
        src={thumbnail}
      />
      <Box textAlign="center" mt={4} flexGrow={1}>
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.600" mt={2}>
          {description}
        </Text>
        <Text
          color="purple.400"
          fontSize="2xl"
          fontWeight="medium"
          letterSpacing="tight"
          mt="50px"
        >
          {category}
        </Text>
        <Text
          color="purple.600"
          fontSize="2xl"
          fontWeight="medium"
          letterSpacing="tight"
        >
          ${price}
        </Text>
      </Box>

      <Button
        as={Link}
        to={`/product/${id}`}
        w="full"
        bg={colorMode === "light" ? "#e6f3fd" : "#9f7aea"}
        color={colorMode !== "light" ? "#e6f3fd" : "#9f7aea"}
        size="xl"
        variant="outline"
        border="none"
        overflow="hidden"
        _hover={{
          bg: colorMode !== "light" ? "#e6f3fd" : "#9f7aea",
          color: colorMode !== "light" ? "purple.600" : "#9f7aea",
          border: "transparent",
        }}
        mt={10}
      >
        Buy now
      </Button>
    </Box>
  );
};
