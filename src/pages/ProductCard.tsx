import { Button, Card, Image, Text } from "@chakra-ui/react";

export const ProdctCard = () => {
  return (
    <Card.Root  maxW="sm" overflow="hidden">
      <Image
        rounded="50%"
        width={200}
        height={200}
        margin={5}
        mx={"auto"}
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title textAlign={"center"}>Living room Sofa</Card.Title>
        <Card.Description color={"purple.500"}>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces.
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  );
};
