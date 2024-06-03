import React from 'react'
import styled from 'styled-components'
import experienceInfo from './ExperienceInfo.json'
export default function ExperienceTimeline() {
  return (
    <TimelineSection className='timeline-section'>
        <div className='timeline-items'>
            {
                experienceInfo.map((experience, index) => {
                    return (
                        <div key={index} className='timeline-item'>
                            <div className='timeline-dot'></div>
                            <div className='timeline-date'>{experience.date}</div>
                            <div className='timeline-content'>
                                <h3>{experience.company}</h3>
                                <ul style={{listStyle: 'inside'}}>
                                    {
                                        experience.content.map((item, index) => {
                                            return <li key={index} style={{marginBottom: '15px'}}>{item}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </TimelineSection>
  )
}

const TimelineSection = styled.div`
    min-height: 100vh;
    width: 100%;
    padding: 100px 15px;

    .timeline-items{
        max-width: 1000px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        position: relative;

        &::before{
            content: '';
            position: absolute;
            width: 2px;
            height: 100%;
            background-color: ${({ theme }) => theme.accent };
            left: calc(50% - 1px);
        }
    }

    .timeline-item{
        margin-bottom: 40px;
        width: 100%;
        position: relative;

        &:nth-child(odd){
            padding-right: calc(50% + 30px);
        }

        &:nth-child(even){
            padding-left: calc(50% + 30px);
        }

        &:last-child{
            margin-bottom: 0;
        }
    }

    .timeline-content{
        background-color: ${({ theme }) => theme.cards };
        padding: 30px;
        border-radius: 8px;
        h3{
            font-size: 20px;
            color: ${({ theme }) => theme.accent };
            margin: 0 0 10px;
            text-transform: capitalize;
            font-weight: 500;
        }
        li{
            color: ${({ theme }) => theme.textPrimary };
            font-size: 16px;
            font-weight: 300;
            line-height: 22px;
        }
    }

    .timeline-dot{
        height: 28px;
        width: 28px;
        background-color: ${({ theme }) => theme.accent };
        position: absolute;
        left: calc(50% - 14px);
        border-radius: 50%;
        top: 10px;
        box-shadow: inset 0 0 5px 3px ${({ theme }) => theme.navbar },0 0 8px 17px ${({ theme }) => theme.navbar };
        /* box-shadow: 0 0 5px 3px ${({ theme }) => theme.accent },0 0 8px 17px ${({ theme }) => theme.navbar }; */
    }

    .timeline-date{
        font-size: 18px;
        color: ${({ theme }) => theme.accent };
        margin: 6px 10px 15px;
    }

    @media(max-width: 767px){
        .timeline-items::before{
            left: 7px;
        }
        
        .timeline-item:nth-child(odd){
            padding-right: 0;
        }
        .timeline-item:nth-child(odd),
        .timeline-item:nth-child(even){
            padding-left: 37px;
        }
        .timeline-dot{
            left: -6px;
        }
    }
`