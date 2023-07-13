import { AccordionList } from "accordion-collapse-react-native";
import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import { Text, View } from "../theme/themed";
import { MaterialIcons } from '@expo/vector-icons';

const List = [
  {
    id: 1,
    title: "Can I use Wall-ID anywhere?",
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nobis consequuntur ipsam quod aperiam esse inventore dolorem doloremque neque unde voluptate'
  },
  {
    id: 2,
    title: "Where is the Head Office located?",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nobis consequuntur ipsam quod aperiam esse inventore dolorem doloremque neque unde voluptate",
  },
  {
    id: 3,
    title: "Is the company a registered entity?",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nobis consequuntur ipsam quod aperiam esse inventore dolorem doloremque neque unde voluptate",
  },
  {
    id: 4,
    title: "Where is the Head Office located?",
    body: "YLorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nobis consequuntur ipsam quod aperiam esse inventore dolorem doloremque neque unde voluptate",
  },
  {
    id: 5,
    title: "Where is the Head Office located?",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nobis consequuntur ipsam quod aperiam esse inventore dolorem doloremque neque unde voluptate",
  },
  {
    id: 6,
    title: "Where is the Head Office located?",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nobis consequuntur ipsam quod aperiam esse inventore dolorem doloremque neque unde voluptate",
  },
  {
    id: 7,
    title: "Where is the Head Office located?",
    body: "Yes, Wall-ID mobile app can be used anywhere",
  },
  {
    id: 8,
    title: "Where is the Head Office located?",
    body: "Yes, Wall-ID mobile app can be used anywhere",
  },
];

export const Accordion = () => {
  const _head = (item: any) => {
    return (
      <View>
        <View style={styles.title_container}>
          <Text style={styles.title} fontFamily="MontserratSemiBold">
            {item.title}
          </Text>
          <View style={styles.round}>
          <MaterialIcons name="keyboard-arrow-down" size={20} color={colors.light.t3} />
          </View>
        </View>
      </View>
    );
  };

  const _body = (item: any) => {
    return (
      <View style={{ paddingVertical: 6, paddingHorizontal: 10 }}>
        <Text style={styles.body_text} fontFamily='MontserratRegular'>{item.body}</Text>
      </View>
    );
  };

  return (
    <>
      <AccordionList
        list={List}
        header={_head}
        body={_body}
        keyExtractor={(item: any) => `${item.id}`}
      />
      <View style={{ borderBottomWidth: 2, width: '100%' }}></View>
    </>
  );
};
const styles = StyleSheet.create({
  title: {
    color: colors.light.white,
  },
  title_container: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  round:{
    borderColor: colors.light.t3,
    borderWidth: 1,
    padding: 2,
    borderRadius: 50
  },
  body_text:{
    color: colors.light.white,
    textAlign: 'justify',
    lineHeight: 17, 
    letterSpacing: .2

  }

});
