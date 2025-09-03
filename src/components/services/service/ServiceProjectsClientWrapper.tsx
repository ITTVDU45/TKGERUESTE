"use client"
import dynamic from 'next/dynamic'
import React from 'react'

const ProjectCarouselClient = dynamic(() => import('@/components/projects/ProjectCarouselClient'), { ssr: false })

const ServiceProjectsClientWrapper: React.FC = () => {
  return <ProjectCarouselClient />
}

export default ServiceProjectsClientWrapper


