import React from 'react';
import { View, Text } from 'react-native';
import Colors from '@/constants/Colors';

interface DotIndicatorProps {
  currentPage: number;
  totalPages: number;
}

const DotIndicator: React.FC<DotIndicatorProps> = ({ currentPage, totalPages }) => {
  const dots = [];

  for (let i = 1; i <= totalPages; i++) {
    const isActive = i === currentPage;
    dots.push(
      <Text
        key={i}
        className="text-3xl mx-2"
        style={{ color: isActive ? Colors.tintColor : 'gray' }}
      >
        ●
      </Text>
    );
  }

  return <View className="flex-row items-center">{dots}</View>;
};

export default DotIndicator;