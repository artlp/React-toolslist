import { createContext, useState } from "react";

const ToolsContext = createContext();
function ToolsListProvider({ children }) {
  const [tools, setTools] = useState([
    {
      name: "Test tool #1",
      link: "https://github.com/",
      uses: "Test description for a tool",
      priceModel: "paid",
      price: "$29",
      categories: [
        "Leisure",
        "Shopping",
        "CEO",
        "Motivation",
        "Creativity",
        "Performance",
      ],
      platforms: ["VS Code", "Adobe Premiere", "WordPress", "Guided Imagery"],
      markEase: 3,
      markUx: 5,
      markHelpful: 5,
      markCommunity: 2,
      id: 1,
      author: "gem_add",
      image: "placeholder-tool-image.jpg",
      freeText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ea!",
      collections: [],
    },
    {
      name: "Tool 2 from collection 2",
      link: "https://google.com/",
      uses: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloremque suscipit perferendis assumenda et impedit nostrum obcaecati soluta possimus unde ea totam in provident, tempora laboriosam vero ducimus. Expedita, rerum?",
      priceModel: "paid",
      price: "$5 a month",
      categories: ["Leisure", "Shopping", "CEO"],
      platforms: ["VS Code", "Adobe Premiere", "WordPress"],
      markEase: 3,
      markUx: 1,
      markHelpful: 3,
      markCommunity: 4,
      id: 2,
      author: "Lion King",
      image: "banana.jpg",
      freeText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam reiciendis sunt, similique inventore nihil ipsum tempore porro natus quod, architecto consectetur delectus nisi aperiam sapiente temporibus qui molestias cumque illo earum vitae fuga nulla. Illo accusamus tempora quae! Architecto.",
      collections: [2],
    },
    {
      name: "Another test tool",
      link: "https://google.com/",
      uses: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magni velit ratione! ",
      priceModel: "free",
      price: "",
      categories: ["Leisure", "Shopping", "CEO"],
      platforms: ["VS Code", "Adobe Premiere", "WordPress"],
      markEase: 5,
      markUx: 4,
      markHelpful: 4,
      markCommunity: 5,
      id: 3,
      author: "gem_add",
      image: "banana.jpg",
      freeText: "Lorem, ipsum dolor. ",
      collections: [2, 3],
    },
    {
      name: "Free trial item from collection 1 and 3",
      link: "https://google.com/",
      uses: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloremque suscipit perferendis assumenda et impedit nostrum obcaecati soluta possimus unde ea totam in provident, tempora laboriosam vero ducimus. Expedita, rerum?",
      priceModel: "trial",
      price: "5 months, then $99/year",
      categories: ["Leisure", "Shopping", "CEO"],
      platforms: ["VS Code", "Adobe Premiere", "WordPress"],
      markEase: 4,
      markUx: 2,
      markHelpful: 4,
      markCommunity: 1,
      id: 4,
      author: "random username",
      image: "placeholder-tool-image.jpg",
      freeText: "",
      collections: [1, 3],
    },
    {
      name: "Wordpress trial item",
      link: "https://wordpress.com/",
      uses: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, minus?",
      priceModel: "trial",
      price: "2 months, after that $19/month",
      categories: ["Shopping"],
      platforms: ["Adobe Premiere", "WordPress"],
      markEase: 4,
      markUx: 3,
      markHelpful: 3,
      markCommunity: 5,
      id: 5,
      author: "WordPress CEO",
      image: "placeholder-tool-image.jpg",
      freeText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi? ",
      collections: [2, 3],
    },
  ]);

  const [collections, setCollections] = useState([
    {
      id: 1,
      name: "Design Collection",
      image: "placeholder-tool-image.jpg",
      user: "gem_add",
    },
    {
      id: 2,
      name: "Dev Collection",
      image: "placeholder-tool-image.jpg",
      user: "Alberta",
    },
    {
      id: 3,
      name: "Dev Collection",
      image: "banana.jpg",
      user: "John Simmons",
    },
  ]);

  const [filterState, setFilterState] = useState(() => {
    const initialState = null;
    return initialState;
  });

  const [filteredTools, setFilteredTools] = useState([]);
  const [searchTools, setSearchTools] = useState([]);
  const [filteredCollections, setFilteredCollections] = useState([]);
  // const [filteredMyTools, setFilteredMyTools] = useState([]);
  // const [filteredSavedTools, setFilteredSavedTools] = useState([]);
  const [searchCategories, setSearchCategories] = useState([]);
  const [searchPlatforms, setSearchPlatforms] = useState([]);
  const [searchPrice, setSearchPrice] = useState("free");
  const [showSearchToolbar, setShowSearchToolbar] = useState(false);
  const [showSearchPage, setShowSearchPage] = useState(false);

  return (
    <ToolsContext.Provider
      value={{
        tools,
        setTools,
        filteredTools,
        setFilteredTools,
        filteredCollections,
        setFilteredCollections,
        setSearchTools,
        searchTools,
        searchCategories,
        searchPlatforms,
        setSearchCategories,
        setSearchPlatforms,
        searchPrice,
        setSearchPrice,
        showSearchToolbar,
        setShowSearchToolbar,
        showSearchPage,
        setShowSearchPage,
        collections,
        setCollections,
        filterState,
        setFilterState,
      }}
    >
      {children}
    </ToolsContext.Provider>
  );
}

export const filter = [
  { name: "Platforms", value: "platforms" },
  { name: "Categories", value: "categories" },
];

export { ToolsListProvider };
export default ToolsContext;
