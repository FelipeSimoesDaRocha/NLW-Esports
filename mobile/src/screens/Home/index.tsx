import React from "react";
import { FlatList, Image, View } from "react-native";

import { styles } from "./styles";

import Logo from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";
import { GAMES } from "../../utils/games";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Heading
        title="Encontre seu Duo"
        subtitle="Selecione o Jogo que deseja jogar"
      />
      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
