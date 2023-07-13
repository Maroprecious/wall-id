import * as React from 'react';
import { View, Text, TouchableOpacity } from '../../component/theme/themed';
import { PageLayout } from '../../component/layout/page-layout';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../constants';
import { NavigationPropsHook } from "../../navigations/types";
import { useNavigation } from '@react-navigation/native';
import TabViewExample from '../../component/tabs/tabs';

export const FaqScreen = () => {
    const navigation = useNavigation<NavigationPropsHook>();
    return(
        <PageLayout icon={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={20} color={colors.light.white} />
            </TouchableOpacity>
          }
          variant="bottom"
          title="FAQs">
              <TabViewExample />
        </PageLayout>
    )
}