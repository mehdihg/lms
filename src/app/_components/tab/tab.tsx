'use client'
import { useState } from "react"
import { TabProps } from "./tab.types"

export const Tabs:React.FC<TabProps>=({tabs})=>{
    const [activeTab,setActiveTab]=useState(0)
    return(
        <div className="tabs">
            <div className="tab-labels">
                {
                    tabs.map((tab,index)=>{
                        return(
                            <a 
                            key={`tab-${index}`}
                            className={`tab-label ${index ===activeTab ? "tab-active" : ""}`}
                            onClick={()=>setActiveTab(index)}
                            >
                                {tab.label}
                            </a>
                        )
                    })
                }
            </div>
            {
                tabs.map((tab,index)=>{
                    return(
                        <div
                        className="tab-content"
                        key={`tab-content-${index}`}
                        style={{display:activeTab === index ? "block":"none"}}
                        >
                            {
                                typeof tab.content ==='string' ?
                                <div
                                dangerouslySetInnerHTML={{
                                    __html: tab.content as TrustedHTML
                                }}
                                >
                                </div>
                                :
                                tab.content
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}