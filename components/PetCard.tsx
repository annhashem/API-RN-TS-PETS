import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Pet } from "../data/pets";

interface PetCardProps {
  pet: Pet;
  onPress: () => void;
  onDelete?: () => void;
}

export const PetCard: React.FC<PetCardProps> = ({ pet, onPress, onDelete }) => {
  const handleDelete = (e: any) => {
    e.stopPropagation();
    onDelete?.();
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: pet.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.idBadge}>#{pet.id}</Text>
            <Text style={styles.name}>{pet.name}</Text>
          </View>
          <View style={styles.rightContainer}>
            {pet.adopted === "Yes" && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>✓</Text>
              </View>
            )}
            {onDelete && (
              <TouchableOpacity
                onPress={handleDelete}
                style={styles.deleteButton}
              >
                <Text style={styles.deleteText}>🗑️</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Text style={styles.type}>{pet.type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: "row",
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "#f0f0f0",
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 12,
  },
  idBadge: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#6200EE",
    backgroundColor: "#F3E5FF",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  type: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  badge: {
    backgroundColor: "#4CAF50",
    borderRadius: 20,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  deleteButton: {
    padding: 4,
  },
  deleteText: {
    fontSize: 18,
  },
});
